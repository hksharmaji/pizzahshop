import { useState } from 'react';
import Button from '../../ui/Button';
import { updateName } from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate= useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username))
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-2 text-lg'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-8 w-78 outline-none mb-4 rounded-full bg-orange-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none  sm:w-64 "
      />

      {username !== '' && (
        <div>
          <Button  onClick={handleSubmit}  className="w-28" type={"secondary"}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
