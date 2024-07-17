import React, { useState } from 'react';

const PatientQueue = () => {

  const patients = [
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
    { id: 3, name: 'Patient 3' },
    { id: 4, name: 'Patient 4' },
    { id: 5, name: 'Patient 5' },
    // ...add more patients
  ];

  const [queue, setQueue] = useState([...patients]);
  const [callingPatient, setCallingPatient] = useState(null);

  const handleStartCall = (patient) => {
    if (queue[0].id === patient.id) {
      setCallingPatient(patient);
    }
  };

  const handleEndCall = () => {
    setCallingPatient(null);
    setQueue((prevQueue) => prevQueue.slice(1));
  };

  return (
    <div>
      <h2>Patients in Queue:</h2>
      {queue.length === 0 ? (
        <p>No patients in queue.</p>
      ) : (
        queue.map((patient, index) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onCall={() => handleStartCall(patient)}
            onEndCall={handleEndCall}
            isCalling={callingPatient === patient}
            isTopInQueue={index === 0}
          />
        ))
      )}
    </div>
  );
};

const PatientCard = ({ patient, onCall, onEndCall, isCalling, isTopInQueue }) => {
  return (
    <div>
      <h3>{patient.name}</h3>
      {isTopInQueue ? (
        isCalling ? (
          <div>
            Calling the doctor...
            <button onClick={onEndCall}>End Call</button>
            {/* WebRTC integration here */}
          </div>
        ) : (
          <button onClick={onCall}>Start Call</button>
        )
      ) : (
        <div>Waiting for your turn...</div>
      )}
    </div>
  );
};

export default PatientQueue;
