import React from "react";
import Title from "../src/components/Title";

function Directions() {
  return (
    <div>
      <Title text="Directions" />
      <div>
        <p>
          The Golden Horseshoe Inn is located at: 9 Golden Horseshoe Rd
          Stanardsville, VA 22973
        </p>
        <p>
          HELPFUL TIP: If using GPS / Navigation please type in our FULL street
          name (there is also a Horseshoe Rd. in Stanardsville - so be sure not
          to forget the "Golden" portion of our street name!)
        </p>
        <p>
          FROM ROUTE 33 WEST: If you are traveling West on Route 33 - look for
          the Lydia Log Cabin building on your LEFT with the RED TIN ROOF - we
          are the very next LEFT on ROUTE 625. If you pass a sign that says "Now
          Entering Shenandoah National Park" you have gone too far.
        </p>
        <p>
          FROM ROUTE 33 EAST: If you are heading East on Route 33 we are the
          first RIGHT after coming down the mountains and passing the sign that
          says "Now Leaving Shenandoah National Park"
        </p>
      </div>
    </div>
  );
}

export default Directions;
