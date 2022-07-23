
import { useState } from 'react';
import './App.css';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';


const StepOne = ({goToNext}) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({name: 'Mike'})}>Next</button>
  </>
)
const StepTwo = ({goToNext}) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({age: 20})}>Next</button>
  </>
)

const StepThree = ({goToNext})=> (
  <>
     <h1>Step 3</h1>
     <p>Congrats you qualify for senior discount</p>
     <button onClick={() => goToNext({})}>Next</button>
  </>
)
const StepFour = ({goToNext})=> (
  <>
     <h1>Step 4</h1>
     <button onClick={() => goToNext({hairColor: 'Black'})}>Next</button>
  </>
)
const StepFive = ({goToNext}) => (
  <>
    <h1>Complete</h1>
    <button onClick={() => goToNext({verification: 'Complete'})}>Complete</button>
  </>
)

// Controlled Onboarding Flow
function App() {

    //Define vars to set & update onBoardingData, current Index
    const [onboardingData, setOnBoardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    // Pass step data, append to onboarding data
    const onNext = stepData => {
      setOnBoardingData({...onboardingData, ...stepData});
      setCurrentIndex(currentIndex + 1)
      console.log(onboardingData)
    }

  return(

      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext = {onNext}
      >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 &&  <StepThree />}
        <StepFour />
        <StepFive />
      </ControlledOnboardingFlow>

  );
}

export default App;
