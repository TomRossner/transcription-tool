import React, { useContext } from 'react';
import {TranscriptContext} from "../context/TranscriptContext"

const Dictionary = () => {
    const {theme} = useContext(TranscriptContext);
  return (
    <div className={theme === "dark" ? "dictionary-container dark" : "dictionary-container"}>
        <div className="dictionary">
            <h3>עיצורים:</h3>
            <p>א = ا ,  א' = ء ,  א + Alt_gr) + 8) = أ ,  א + Alt_gr) + 6) = ٱ ,  א + Alt_gr) + -) = إ ,  א + (Shift + ;) = آ.</p>
            <p>ב = ب ,  ב' = ڤ ,  פ/ף = ف ,  פ' = پ ,  ת = ت ,  ת' = ث.</p>
            <p>ג' = ج ,  ג = چ ,  ח = ح ,  ח' = خ.</p>
            <p>ד = د ,  ד' = ذ ,  ר = ر ,  ז = ز ,  ז' = ژ.</p>
            <p>ס = س ,  ש = ش ,  צ = ص ,  צ'/ץ' = ض.</p>
            <p>ט = ط ,  ט' = ظ ,  ע = ع ,  ע' = غ ,  ק = ق.</p>
            <p>כ/ך = ك ,  כ' = گ ,  ל = ل ,  מ/ם = م ,  נ/ן = ن.</p>
            <p>ה = ه ,  ה' = ة ,  ו = و ,  ו' = ؤ ,  י = ي ,  י' = ئ ,  י + Alt_gr) + -) = ى.</p>
            <br></br>
            <h3>תנועות:</h3>
            <p>Alt_gr + פ = ـَـ (Alt_gr + ק = ـًـ) ,  Alt_gr + ח = ـِـ (Alt_gr + י = ـٍـ) ,  Alt_gr + \ = ـُـ (Alt_gr + ו = ـٌـ).</p>
            <p>Alt_gr + ש = ـْـ ,  Alt_gr + ד = ـّـ ,  Alt_gr + ר = ـٰـ .</p>
        </div>
    </div>
  )
}

export default Dictionary;