import React, { useState } from "react"

export const UncontrolledOnboardingFlow = ({children, onFinish}) => {

        //Define vars to set & update onBoardingData, current Index
        const [onboardingData, setOnBoardingData] = useState({});
        const [currentIndex, setCurrentIndex] = useState(0);

        // Pass step data, append to onboarding data
        const goToNext  = stepData => {
        const nextIndex = currentIndex + 1;
        const updatedData= {
            ...onboardingData, ...stepData
        }

        //log upDated data
        console.log(updatedData);

        // track the currentIndex until last step
        if(nextIndex < children.length){
            setCurrentIndex(nextIndex)
        } else {
            onFinish(updatedData);
        }

        // update Onboarding data variable
        setOnBoardingData(updatedData)
    }

    // Map data to children of the parent controller
    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)){
        return React.cloneElement(currentChild, {goToNext})
    }
    return (
        <>
            {currentChild}     
        </>
    )

}