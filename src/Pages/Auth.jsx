import LeftAuth from "../Components/LeftAuth.jsx";
import RightAuth from "../Components/RightAuth.jsx";
const Auth = () => {
  return (
    <div className={`flex gap-2 w-full justify-center`}>
      <LeftAuth />
      <RightAuth />
    </div>
  );
};

export default Auth;
