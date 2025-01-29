import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  const location = useLocation();
  const [showExerciseButton, setShowExerciseButton] = useState(true);

  useEffect(() => {
    if (location.pathname === "/exercise") {
      setShowExerciseButton(false); // ExerciseDetail sayfasındayken butonu gizle
    } else {
      setShowExerciseButton(true); // Diğer sayfalarda butonu göster
    }
  }, [location.pathname]);

  return (
    <nav>
      {showExerciseButton && (
        <Link to="/exercise">
          <Button>Egzersizler</Button>
        </Link>
      )}
      {/* Diğer navbar içerikleri */}
    </nav>
  );
};

export default Navbar;
