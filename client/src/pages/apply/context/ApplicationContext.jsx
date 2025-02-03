import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  currentStep: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    background: "",
    currentSituation: "",
    employmentStatus: "",
    interest: "",
    documents: [],
  },
  isSubmitting: false,
  error: null,
};

// Action types
export const ACTIONS = {
  SET_STEP: 'SET_STEP',
  UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
  SET_SUBMITTING: 'SET_SUBMITTING',
  SET_ERROR: 'SET_ERROR',
  RESET_FORM: 'RESET_FORM',
};

// Reducer function
function applicationReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case ACTIONS.UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    case ACTIONS.SET_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload,
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTIONS.RESET_FORM:
      return initialState;
    default:
      return state;
  }
}

// Create context
const ApplicationContext = createContext();

// Provider component
export function ApplicationProvider({ children }) {
  const [state, dispatch] = useReducer(applicationReducer, initialState);

  const value = {
    state,
    dispatch,
    // Helper functions
    nextStep: () => {
      if (state.currentStep < 4) {
        dispatch({ type: ACTIONS.SET_STEP, payload: state.currentStep + 1 });
      }
    },
    prevStep: () => {
      if (state.currentStep > 1) {
        dispatch({ type: ACTIONS.SET_STEP, payload: state.currentStep - 1 });
      }
    },
    updateFormData: (data) => {
      dispatch({ type: ACTIONS.UPDATE_FORM_DATA, payload: data });
    },
    setSubmitting: (isSubmitting) => {
      dispatch({ type: ACTIONS.SET_SUBMITTING, payload: isSubmitting });
    },
    setError: (error) => {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error });
    },
    resetForm: () => {
      dispatch({ type: ACTIONS.RESET_FORM });
    },
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}

// Custom hook for using the context
export function useApplication() {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
}
