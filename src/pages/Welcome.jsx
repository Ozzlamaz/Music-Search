import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function Welcome() {

  const navigation = useNavigation();

  if(navigation.state === 'loading') {
    return (
        <div className="d-flex justify-content-center">
          <LoadingSpinner />
        </div>
    )
  }
  
  return (
    <>
        <h1 className="text-center">Welcome</h1>
        <h2 className="text-center">Please start by searching for an album or artist name</h2>
    </>
  )
}
export default Welcome