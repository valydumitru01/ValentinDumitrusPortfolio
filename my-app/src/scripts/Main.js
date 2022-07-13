import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import me from '../me.jpeg';
function Main() {
  return (
    <>
    <Zoom>
    <img
      alt="mi foto"
      src={me}
      width="300"
    />
    </Zoom>

    </>
  );
}

export default Main;
