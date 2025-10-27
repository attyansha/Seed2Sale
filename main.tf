# main.tf
terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
    null = {
      source = "hashicorp/null"
      version = "~> 3.0"
    }
  }
  required_version = ">= 1.3.0"
}

provider "vercel" {
  api_token = var.vercel_token
}

# Vercel frontend - WITHOUT git repository initially
resource "vercel_project" "frontend" {
  name      = "${var.project_name}-frontend"
  framework = "create-react-app"
  
  # Remove git_repository block for now to avoid the connection error
  # We'll manually connect to Git later or use a different approach
}

# Vercel project environment variables
resource "vercel_project_environment_variable" "api_url" {
  project_id = vercel_project.frontend.id
  key        = "REACT_APP_API_URL"
  value      = "https://seed2sale-production.up.railway.app"
  target     = ["production"]
}

# Create initial deployment - comment this out for now
# resource "vercel_deployment" "frontend_deploy" {
#   project_id  = vercel_project.frontend.id
#   ref         = "main"
#   delete_on_destroy = true

#   depends_on = [vercel_project_environment_variable.api_url]
# }

# Railway backend deployment (via CLI)
resource "null_resource" "backend_deploy" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = <<EOT
      cd ${path.root}/${var.railway_project_dir}
      railway login
      railway up --service ${var.project_name}-backend
    EOT

    environment = {
      RAILWAY_TOKEN = var.railway_token
    }
  }

  depends_on = [vercel_project.frontend]
}

# Output URLs
output "frontend_project_name" {
  value = vercel_project.frontend.name
}

output "frontend_live_url" {
  value = "https://${vercel_project.frontend.name}.vercel.app"
}

# output "latest_deployment_url" {
#   value = vercel_deployment.frontend_deploy.url
# }

output "backend_api_url" {
  value = "https://seed2sale-production.up.railway.app"
}

output "project_id" {
  value = vercel_project.frontend.id
}

output "team_id" {
  value = vercel_project.frontend.team_id
}