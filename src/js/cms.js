import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.scss";
import AboutPreview from "./templates/about.js";

CMS.registerPreviewStyle(styles, { raw: true });

CMS.registerPreviewStyle("site/css/resume.css");
CMS.registerPreviewStyle("site/css/tweaks.css");

CMS.registerPreviewTemplate("about", AboutPreview);
CMS.init();
