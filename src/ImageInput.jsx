import { useState } from "react";
export function ImageInput() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <input
        type="file"
        name="image"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }}
      />
      {console.log(selectedImage, "New Image")}
    </div>
  );
}
