import React from 'react'

const TryCatch = () => {
    try {
  console.log("Start");
  const x = 5;
  console.log(y);
} catch (error) {
  console.log(error);
  console.error(error)

} finally {
  console.log("This always runs");
}

  return (
    <div>
Try catch
    </div>
  )
}

export default TryCatch