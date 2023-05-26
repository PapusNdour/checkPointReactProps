import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={styles.container}>
      <img src={children} alt="Profile" style={styles.image} />
      {/* .............................................. */}
      <h2 style={styles.fullName}>{fullName}</h2>
      <p style={styles.bio}>{bio}</p>
      <p style={styles.profession}>{profession}</p>
      <button style={styles.button} onClick={() => handleName(fullName)}>Afficher le nom</button>
      
    </div>
  );
};

// Props par défaut pour le composant de profil
Profile.defaultProps = {
  fullName: 'Nom de l\'utilisateur',
  bio: 'Pas de bio saisie',
  profession: 'Profession...',
 
};

// Vérification des types des props avec PropType
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
};

// Styles en ligne
const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '10px',
  },
  image: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  fullName: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    backgroundColor: '#d1f0f0'
  },
  bio: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  profession: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  button:{

    width: '150px',
    height: '50px',
    borderRadius: '4px',
    marginBottom: '10px',
    backgroundColor:'#a1f0e1',

  },


};

export default Profile;