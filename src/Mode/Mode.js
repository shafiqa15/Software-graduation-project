import React from 'react';

// Assuming these SVG icons are imported as React components
import { Check2, CircleHalf, MoonStarsFill, SunFill, Home, PeopleCircle } from './icons'; // Update the path as necessary

const Mode = () => {
  return (
    <div>
      
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          aria-label="Toggle theme (auto)"
        >
          <CircleHalf className="bi my-1 theme-icon-active" width="1em" height="1em" />
          <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              <SunFill className="bi me-2 opacity-50 theme-icon" width="1em" height="1em" />
              Light
              <Check2 className="bi ms-auto d-none" width="1em" height="1em" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              <MoonStarsFill className="bi me-2 opacity-50 theme-icon" width="1em" height="1em" />
              Dark
              <Check2 className="bi ms-auto d-none" width="1em" height="1em" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              <CircleHalf className="bi me-2 opacity-50 theme-icon" width="1em" height="1em" />
              Auto
              <Check2 className="bi ms-auto d-none" width="1em" height="1em" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mode;
