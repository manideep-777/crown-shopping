import { Outlet } from 'react-router-dom';
import Directory from '../../components/Directory/directory.component';

function Home() {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  )
}

export default Home
