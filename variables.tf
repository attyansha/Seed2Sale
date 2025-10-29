variable "vercel_token" {
  description = "Vercel API token"
  type        = string
}

variable "railway_token" {
  description = "Railway API token"
  type        = string
}

variable "project_name" {
  description = "Seed2Sale"
  type        = string
}

variable "railway_project_dir" {
  description = "Path to Railway backend folder"
  type        = string
  default     = "../backend"
}