import dashboard from '../../assets/dashboard.png';
import classroom from '../../assets/class.png';
import bus_map from '../../assets/bus_map.png';
import bus from '../../assets/bus_supervioser.png';
import student_detailes from '../../assets/student_detailes.png';


export const projects = [
{
  icon:dashboard,
  type: "project",
  title: "Smart Attendance & Safety System",
  description: "A full-featured school management platform connecting to a Django REST API, with role-based dashboards for admins, teachers, parents, and bus supervisors to manage student attendance, schedules, live bus tracking, and safety reporting. Bilingual (Arabic/English) with automatic JWT refresh.",
  tags: ["React 19", "Vite", "React Router", "React Query",  "Tailwind CSS", "Axios", "Leaflet", "i18next"],
  images: [dashboard , classroom, bus_map, student_detailes , bus],
  liveUrl: "#",
  repoUrl: "#",
},

]
