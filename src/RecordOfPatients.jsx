const patientData = [
    {
      id: '1',
      name: 'John Doe',
      phoneNumber:9447163558,
      age:23,
      Gender:"Male",
      BloodGroup:'A+',
      medicalHistory: [
        {
          date: '2002-04-12',
          diagnosedDiseases: ['Common Cold', 'Fever', 'Cough'],
          medicinesPrescribed: ['Medicine A', 'Medicine B'],
          doctorConsulted: 'James Poovan',
        },
        {
          date: '2003-06-20',
          diagnosedDiseases: ['Headache', 'Sinusitis'],
          medicinesPrescribed: ['Medicine C', 'Medicine D'],
          doctorConsulted: 'Anna Johnson',
        },
      ],
      address: 'Vayampilliyil House, Muvattupuzha PO, 686661',
    },
    // More patient objects...
    {
      id: '2',
      name: 'Jane Smith',
      phoneNumber:6238671471,
      Gender:"Male",
      age:43,
      BloodGroup:'B+',
      medicalHistory: [
        {
          date: '2002-08-15',
          diagnosedDiseases: ['Allergies', 'Sneezing'],
          medicinesPrescribed: ['Medicine E', 'Medicine F'],
          doctorConsulted: 'David Miller',
        },
      ],
      address: 'Sunshine Apartments, Cityville, 12345',
    },
    {
      id: '3',
      name: 'Michael Brown',
      phoneNumber:7560995470,
      Gender:"Male",
      age:33,
      BloodGroup:'O+',
      medicalHistory: [
        {
          date: '2003-03-05',
          diagnosedDiseases: ['Stomachache', 'Digestive Issues'],
          medicinesPrescribed: ['Medicine G', 'Medicine H'],
          doctorConsulted: 'Sarah Davis',
        },
      ],
      address: 'Greenwood Villa, Countryside, 67890',
    },
    // Add details of more patients...
  ];
 //module.exports = patientData;

  export default patientData;
  