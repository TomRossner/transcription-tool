import React from 'react';

const Header = () => {
  return (
    <div className='header'>
        <h1>Transcript app</h1>
        <p>הקלידו את הטקסט שלכם בתעתיק מדויק:</p>
        <p>אותיות מיוחדות: א'=ء, א*=أ, א^=ٱ, ~=آ, י־=ى, ה'=ة, פ'=پ, ב'=ڤ, ג=چ, כ'=گ, ז'=ژ.</p>
        <p>תנועות: פתח = فتحة (קמץ = فتحتين), חיריק = كسرة (ALT GR + י = كسرتين), קובוץ = ضمّة (ALT GR + ו = ضمّتين), דגש = شدّة, שווא = سكون.</p>
    </div>
  )
}

export default Header;