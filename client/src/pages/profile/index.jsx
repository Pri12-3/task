import { useAppStore } from '@/store'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack} from 'react-icons/io5'


const Profile = () => {
  const navigate = useNavigate();
  const {userInfo, setUserInfo} = useState("");
  const [firstName, setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  
  const saveChanges = async () => {};

  return (
    <div className='bg-gradient-to-b from-blue-950 to-black h-[100vh] flex items-center justify-center flex-col gap-10'>
      <div className='flex flex-col gap-10 w-[90vw] md:w-max'>
        <div>
          <IoArrowBack className='text-4xl lg:text-6xl text-white cursor-pointer'>
          </IoArrowBack>
        </div>
        <div className='grid grid-cols-2'>
          <div className='h-full w-32 md:w-48 md:h-48 relative flex items-center justify-center'></div>
        </div>
      </div> 
    </div>
  )
}

export default Profile
