
import './App.css';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';

const StepOne = ({goToNext}) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({name: 'Mike'})}>Next</button>
  </>
)
const StepTwo = ({goToNext}) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({age: 33})}>Next</button>
  </>
)
const StepThree = ({goToNext})=> (
  <>
     <h1>Step 3</h1>
     <button onClick={() => goToNext({hairColor: 'Black'})}>Next</button>
  </>
)
const StepFour = ({goToNext}) => (
  <>
    <h1>Complete</h1>
    <button onClick={() => goToNext({verification: 'Complete'})}>Complete</button>
  </>
)

// Uncontrolled Onboarding Flows
function App() {

  return(
    <>
      <UncontrolledOnboardingFlow onFinish={data => {
        console.log(data);
         alert('You finished the onboarding process');
      }}>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default App;
