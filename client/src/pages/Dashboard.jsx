import { useState, useEffect, use } from 'react';
import { dummyEmployeeDashboardData } from '../assets/assets';
import { dummyAdminDashboardData } from '../assets/assets'; 
import Loading from '../components/Loading';
import EmployeeDashboard from '../components/EmployeeDashboard';
import AdminDashboard from '../components/AdminDashboard';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dummyAdminDashboardData);
    setTimeout(() => {
      setLoading(false);
    }, 1000) // Simulate loading delay
  }, []);

  if(loading) return <Loading />
  if(!data) return <p className='text-center text-slate-500 py-12'>No data available</p>

  if(data.role === "ADMIN"){
    return <AdminDashboard data={data} />
  } else{
    return <EmployeeDashboard data={data} />
  } 
  }

  
export default Dashboard;