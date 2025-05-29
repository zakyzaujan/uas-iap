import useTitle from "@/hooks/useTitle";

const Profile = () => {
  useTitle("Profil Saya");

  return (
    <div className="max-w-md mx-auto p-6 text-center">
      <img
        src="https://media1.tenor.com/m/-uc6nONMFsQAAAAd/freaky-ahh-cat.gif"
        alt="Profil Saya"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h1 className="text-2xl font-bold mb-2">Zaky Zaujan J.</h1>
      <p className="text-gray-600">
        Information Systems Undergraduate Student who loves anything related on
        tech, coding, and video games.
      </p>
    </div>
  );
};

export default Profile;
