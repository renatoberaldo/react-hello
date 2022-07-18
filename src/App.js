import { useEffect, useState } from 'react';
import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import OnlineOffline from './components/OnlineOffline';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idServices';


export default function App() {

const [name, setName] = useState('Renato');
const [birthDate, setBirthDate] = useState('1985-12-06');
const [showTimer, setShowTimer] = useState(false);
const [isOnline, setIsOnline] = useState(true);

useEffect(() => {
  
  
  // online
  function toggleOnline(){
    setIsOnline(true);
  }

  // offline
  function toggleOffline(){
    setIsOnline(false);
  }

  window.addEventListener('online', toggleOnline);
  window.addEventListener('offline', toggleOffline);

  return () => {
    window.removeEventListener('online', toggleOnline);  
    window.removeEventListener('offline',toggleOffline);
  }

}, []);

// Exec the function everytime the name was changed.
// First parameter is the function and the second is the dependence ( [name] ).
useEffect(() => {
  document.title = name;
}, [name]);

useEffect(() => {
  document.title = name;
}, [name]);

function handleNameChange(newName){
  setName(newName);
}

function handleBirthDateChange(newDate){
  setBirthDate(newDate);
}

function toggleShowTimer(){
  setShowTimer(currentShowTimer => !currentShowTimer);
}




  return (
    <>
      <Header size="large">Header - Project One</Header>

      <Main>

        <OnlineOffline isOnline={isOnline} />

        { showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>

        )}
        

        <CheckboxInput
          id={getNewId()}
          labelDescription='Show Timer'
        
          onCheckboxChange={toggleShowTimer}
          
        />

        <TextInput
          id={getNewId()}
          labelDescription='Type your name:'
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />
        <DateInput
          id={getNewId()}
          labelDescription='Type your birthdate:'
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          Your name is {name}, and it has {name.length} characters e you have {getAgeFrom(birthDate)} years.
        </p>
      </Main>
    </>
  );
}
