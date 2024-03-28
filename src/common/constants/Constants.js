export const personalInfoField = [
  {
    id: 1,
    name: 'First Name',
    placeholder: 'Enter First Name',
  },
  {
    id: 2,
    name: 'Last Name',
    placeholder: 'Enter Last Name',
  },
  {
    id: 3,
    name: 'Email',
    placeholder: 'Enter Email',
  },
  {
    id: 4,
    name: 'Date of Birth',
    placeholder: 'Enter Date of Birth',
  },
  {
    id: 5,
    name: 'Primary Number',
    placeholder: 'Enter your primary number',
  },
  {
    id: 6,
    name: 'Whatsapp Number',
    placeholder: 'Enter your Whatsapp number',
  },
  {
    id: 7,
    name: 'Secondary Number (Optional)',
    placeholder: 'Enter your secondary number',
  },
];

export const docUploadFeild = [
  {
    id: 1,
    name: 'Personal Documents',
    message: 'Please upload mentioned documents for verification purpose.',
    upload: [
      {
        id: 1,
        name: 'Aadhar Card',
        message:
          'Please upload both front and back side of your Aadhar Card for verification purpose.',
        go: 'UploadDoc',
      },
      {
        id: 2,
        name: 'PAN Card',
        message:
          'Please upload front side of your PAN Card for verification purpose.',
        go: 'UploadDoc',
      },
      {
        id: 3,
        name: 'Driving License',
        message:
          'Please upload front side of your Driving License for verification purpose.',
        go: 'UploadDoc',
      },
    ],
    go: 'DocVerification',
  },
  {
    id: 2,
    name: 'Vehicle Details',
    message: 'Please upload mentioned documents for verification purpose.',
    upload: [],
    go: 'DocVerification',
  },
  {
    id: 3,
    name: 'Bank Details',
    message: 'Please upload mentioned documents for verification purpose.',
    upload: [],
  },
];

export const accountOptions = [
  {
    id: 1,
    name: 'Edit Profile',
    icon: 'account-outline',
  },
  {
    id: 2,
    name: 'Alloted Area',
    icon: 'map-marker-outline',
  },
  {
    id: 3,
    name: 'Refer & Earn',
    icon: 'gift-outline',
  },
  {
    id: 5,
    name: 'FAQs',
    icon: 'file-find-outline',
  },
  {
    id: 6,
    name: 'Terms & Conditions',
    icon: 'file-document-edit-outline',
  },
  {
    id: 7,
    name: 'Support & Feedback',
    icon: 'headset',
  },
];
