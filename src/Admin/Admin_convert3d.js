import React, { useState } from 'react';

function Admin_convert3d() {
  const [conversionResult, setConversionResult] = useState(null);

  const handleConvertTo3D = async () => {
    try {
        // axios.post('http://192.168.88.6:9000/signup', formData)

      const response = await fetch('http://192.168.88.5:2000/convert-to-3d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setConversionResult(data);
      console.log(data);
    }
     catch (error) {
      console.error('Error:', error);
      alert('Failed to convert to 3D.');
    }
  };

  return (
    <div>
      <h1>3D Image Converter</h1>
      <button onClick={handleConvertTo3D}>Convert Image</button>
      <div>
        <h2>Conversion Result:</h2>
        <pre>{JSON.stringify(conversionResult, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Admin_convert3d;
