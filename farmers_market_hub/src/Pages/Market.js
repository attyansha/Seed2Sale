import React from 'react';
import MarketCard from '../components/MarketCard';

const sampleMarkets = [
  { id: 1, name: 'Delhi Organic Market', location: 'Connaught Place, Delhi', hours: 'Sat & Sun 8am-4pm', vendors: 25, image: 'https://imgs.search.brave.com/6E6egvWpGhVe1VsbmrBr7f1YsX3267ke1zCJFivZ4T4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbmFj/a2ZheC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTIv/RGVsaGlpdGVzLTEu/anBn' },
  { id: 2, name: 'Mumbai Farmers Market', location: 'Bandra West, Mumbai', hours: 'Sunday 9am-3pm', vendors: 30, image: 'https://imgs.search.brave.com/dXDCCp3qoPKRi337DlDMJNZW9csWhMeTsr9Uy8fYCpI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJpcHNhdnZ5LmNv/bS90aG1iLzFjMlRi/VFFmdGZKUnhIM2Q0/S2RmWG5oLUR0bz0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL011/bWJhaTIwMTktMS02/NS1hMzY3ZGY5Nzlh/MjM0YzM0ODFkMGMx/YjUwOGY3YmE4MC5K/UEc' },
  { id: 3, name: 'Chennai Green Bazaar', location: 'T Nagar, Chennai', hours: 'Saturdays 7am-1pm', vendors: 18, image: 'https://imgs.search.brave.com/yK-yv3oxP7W925EscAM4fL6IX_dzsxfTv_cnmWbWlD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgz/MzA2NDM1L3Bob3Rv/L2luZGlhbi1tYXJr/ZXRwbGFjZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cWpM/blRMYVR5c0FVemxZ/TFFHRlRaYXNHRE5V/Z0w0SGc3SklqYmZ5/cDBmUT0' },
  { id: 4, name: 'Kolkata Fresh Market', location: 'Salt Lake, Kolkata', hours: 'Fri-Sun 8am-2pm', vendors: 22, image: 'https://imgs.search.brave.com/Mzvzz_GNUB8D8Z_sReDKEc14hd1z5rB5zVI9ujBo-ew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3Jhbmdld2F5ZmFy/ZXIuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzExL0lN/R18yMDE5MDYxOF8w/ODU2MTguanBn' },
  { id: 5, name: 'Bengaluru Organic Haven', location: 'Indiranagar, Bengaluru', hours: 'Sundays 8am-2pm', vendors: 20, image: 'https://imgs.search.brave.com/TTcoSa75bPUTV5Ey4GnWpIhUgajoeZIjNeHjbNdB3zA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvYmFuZ2Fsb3Jl/L2g3LzA4MHB4eDgw/Lnh4ODAuMjAwNjI5/MDA1NTMwLngzaDcv/Y2F0YWxvZ3VlL3N1/bmRheS1mYXJtZXJz/LW1hcmtldC12YXJ0/aHVyLWJhbmdhbG9y/ZS12ZWdldGFibGUt/dmVuZG9ycy1BS05v/QkJKaldPLTI1MC5q/cGc_dz02NDAmcT03/NQ' },
  { id: 6, name: 'Hyderabad Farmers Hub', location: 'Hitech City, Hyderabad', hours: 'Sat & Sun 9am-3pm', vendors: 15, image: 'https://imgs.search.brave.com/s3H7UcpHQAZeetzmpV-u2KFyim1RPqhDpwnU21x5CAk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MDc2MDY2NC9waG90/by9hLXZlbmRvci13/YWl0cy1mb3ItY3Vz/dG9tZXJzLWF0LWEt/d2hvbGVzYWxlLXZl/Z2V0YWJsZS1tYXJr/ZXQtaW4taHlkZXJh/YmFkLW9uLW1heS0x/OS0yMDIyLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1yWTBR/R3FXSzAtZjd5OFlF/VENWNmVWWjVXX1Ft/MEVPeW95bld4X20z/UVZrPQ' },
  { id: 7, name: 'Ahmedabad Local Market', location: 'Maninagar, Ahmedabad', hours: 'Sat 7am-12pm', vendors: 10, image: 'https://imgs.search.brave.com/C8voSNcsebNrmVN4QorgsoUps9o6ZNScn2m-9KyzP3I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/NTY2NDY2L3Bob3Rv/L2N1c3RvbWVycy1z/aG9wLWZvci12ZWdl/dGFibGVzLWF0LWEt/bWFya2V0LWluLWFo/bWVkYWJhZC1vbi1v/Y3RvYmVyLTIyLTIw/MTMtdGhlLXdvcmxk/LWJhbmsuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTBZLXVV/Y0xDNE9kWlhoQTBG/SExVaGpBVFN2Q3hY/bW5ITC15aTIyV3ZQ/QnM9' },
  { id: 8, name: 'Pune Green Market', location: 'Koregaon Park, Pune', hours: 'Sunday 8am-1pm', vendors: 18, image: 'https://imgs.search.brave.com/fzTssnCgvu8imCIaYu3LoqNH2Y-fvoleDidsFx4VqJQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXNob3IuY29t/L3VwbG9hZHMvYXJ0/aWNsZS8wOF8yMDE1/LzE0Mzk0NDUyNzZf/MjIuanBn' },
  { id: 9, name: 'Jaipur Fresh Plaza', location: 'C-Scheme, Jaipur', hours: 'Sat-Sun 7am-2pm', vendors: 14, image: 'https://imgs.search.brave.com/aHTiJlQs1opFMxQODynEOHCAWA68YmLZZ6rFhPw50R8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9qYWlw/dXJ0aHJ1bXlsZW5z/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNi9qYWlw/dXItZmFybWVycy1t/YXJrZXQtY2xhcmtz/LWFtZXIuanBnP3c9/NzIw' },
  { id: 10, name: 'Lucknow Farmers Market', location: 'Hazratganj, Lucknow', hours: 'Sunday 8am-2pm', vendors: 16, image: 'https://imgs.search.brave.com/Ok8cgGApVmFw77enNoPo6Yjgt6dygjUL0-9EiOcBTX4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTMw/MDgyMTk3L3Bob3Rv/L2NyYXdmb3JkLW1h/cmtldC1tdW1iYWkt/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTdhN0RT/OEkwNzU5TDN6Y3VI/SUYwQkVDTmpaMHlD/RFlCVGIwak9zWGVE/Wlk9' },
];

export default function Market() {
  return (
    <div>
      <h2 className="section-title">Nearby Markets</h2>
      <p className="section-subtitle">Discover weekend and daily markets around your city.</p>
      <div className="fmh-grid">
        {sampleMarkets.map(m => (
          <div className="fmh-col-4" key={m.id}>
            <MarketCard market={m} />
          </div>
        ))}
      </div>
    </div>
  );
}
