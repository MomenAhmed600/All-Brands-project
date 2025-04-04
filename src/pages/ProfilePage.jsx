import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function ProfilePage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  });

  const updateUserImage = (userId, image) => {
    fetch(`http://localhost:8000/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profileImage: image }),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        setUser(updatedUser);
      })
      .catch((error) => {
        console.error('Error updating user image:', error);
      });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setNewImage(base64Image);
        updateUserImage(userId, base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) {
    return <p>You must have an account</p>;
  }

  return <Container>
    <div className="review-p">
      <div className="row" id="bg-prof-img">
        <div className="col-md-4 " >
          <img
            src={newImage || user.profileImage}
            alt=""
            className="img-fluid my-5"
            id="img-profi"
          />

          <div className="uploud-profi-img">
            <h5>Upload an Image</h5>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

        </div>
        <div className="col-md-5 my-5">
          <h1 className="mt-5 ">
            Account Profile
          </h1>
          <h3 className="mt-5 ">
            Welcome {user.firstName}
          </h3>

          <div className="profi-det my-3">
            <div className='profi-det-c'>
            <h4>First Name: </h4>
            <h5>{user.firstName}</h5>
            </div>

            <div className="profi-det-c">
            <h4>Last Name: </h4>
            <h5>{user.lastName}</h5>
            </div>
          </div>

          <div  className="profi-det-email-c">
            <h4>Email: </h4>
          <h5>{user.email}</h5>
          </div>
        </div>

      </div>
    </div>
  </Container>;

}
