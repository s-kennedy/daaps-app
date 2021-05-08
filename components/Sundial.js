import styles from "../styles/Sundial.module.css"

export default function Sundial() {
  return (
    <div className={styles.starpathImage}>
      <svg className={styles.starpaths} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 620">
        <g>
              <path className={styles.star1} d="M30,310a280,280 0 1,0 560,0a280,280 0 1,0 -560,0"/>
              <path className={styles.star2} d="M70,310a240,240 0 1,0 480,0a240,240 0 1,0 -480,0"/>
              <path className={styles.star3} d="M110,310a200,200 0 1,0 400,0a200,200 0 1,0 -400,0"/>
              <path className={styles.star4} d="M130,310a180,180 0 1,0 360,0a180,180 0 1,0 -360,0"/>
              <path className={styles.star5} d="M150,310a160,160 0 1,0 320,0a160,160 0 1,0 -320,0"/>
              <path className={styles.star6} d="M185,310a125,125 0 1,0 250,0a125,125 0 1,0 -250,0"/>
              <path className={styles.star7} d="M220,310a90,90 0 1,0 180,0a90,90 0 1,0 -180,0"/>
              <path className={styles.star8} d="M250,310a60,60 0 1,0 120,0a60,60 0 1,0 -120,0"/>
              <path className={styles.star9} d="M270,310a40,40 0 1,0 80,0a40,40 0 1,0 -80,0"/>

              <g className={styles.magnifyingGlass}>
                <path d="M124.7,146.08a19.5,19.5,0,1,1,13.79-5.71A19.34,19.34,0,0,1,124.7,146.08Z" />
                <line x1="112.2" y1="126.58" x2="137.2" y2="126.58"/>
                <line x1="124.7" y1="114.08" x2="124.7" y2="139.08"/>
                <rect className={styles.yellowFill} x="143.47" y="136.73" width="5" height="20" transform="translate(-61.29 146.31) rotate(-45)" />
              </g>

              <g className={styles.magnifyingGlass}>
                <path d="M326.84,606.94a19.5,19.5,0,1,1,13.79-5.71A19.38,19.38,0,0,1,326.84,606.94Z"/>
                  <line x1="314.34" y1="587.44" x2="339.34" y2="587.44"/>
                  <rect className={styles.yellowFill} x="345.61" y="597.59" width="5" height="20" transform="translate(-327.96 424.23) rotate(-45)" />
              </g>

                <g className={styles.questionCursor}>
                    <polygon className={styles.yellowFill} points="336 13.05 358.6 31.69 345.46 31.44 336 41.25 336 13.05" />
                    <path d="M350.91,11.36A1.29,1.29,0,0,1,350,11a1.15,1.15,0,0,1-.35-.86V7.79A1.21,1.21,0,0,1,350,6.9a1.15,1.15,0,0,1,.86-.35h3.29a3.13,3.13,0,0,0,1.31-.24,1.74,1.74,0,0,0,.8-.71,2.24,2.24,0,0,0,.27-1.14,1.84,1.84,0,0,0-.31-1.09,1.94,1.94,0,0,0-.85-.68,3.38,3.38,0,0,0-1.29-.23,2.87,2.87,0,0,0-1.29.26,2,2,0,0,0-.79.72,4.08,4.08,0,0,0-.44,1.11,2.33,2.33,0,0,1-.25.45,1,1,0,0,1-.4.29,1.41,1.41,0,0,1-.66.13,1.27,1.27,0,0,1-.88-.32,1.12,1.12,0,0,1-.35-.87A4,4,0,0,1,349.65,2,4.22,4.22,0,0,1,351.49.51,6.77,6.77,0,0,1,354.21,0a6,6,0,0,1,2.7.55,3.94,3.94,0,0,1,1.73,1.57,4.76,4.76,0,0,1,.59,2.41,4.39,4.39,0,0,1-.58,2.3,3.88,3.88,0,0,1-1.79,1.52,7.71,7.71,0,0,1-3.09.54h-1.84l.26-.82v2.09a1.12,1.12,0,0,1-.36.86A1.29,1.29,0,0,1,350.91,11.36Zm0,4.1a1.65,1.65,0,0,1-1.17-.41,1.48,1.48,0,0,1-.44-1.11,1.45,1.45,0,0,1,.44-1.1,1.65,1.65,0,0,1,1.17-.41,1.62,1.62,0,0,1,1.15.41,1.48,1.48,0,0,1,.43,1.1,1.51,1.51,0,0,1-.43,1.11A1.62,1.62,0,0,1,350.92,15.46Z"/>
                  </g>

                <g className={styles.cursor}>
                    <polygon className={styles.yellowFill} points="202 579.94 202 610.42 212.17 599.88 226.51 600.16 202 579.94" />
                </g>

                <g className={styles.crosshair}>
                    <line x1="438.8" y1="443.7" x2="469.8" y2="443.7"/>
                    <line x1="454.3" y1="428.2" x2="454.3" y2="459.2"/>
                </g>

                <g className={`${styles.emptyCircles} ${styles.yellowFill}`}>
                        <circle cx="470" cy="300" r="5.5"/>
                        <circle cx="260" cy="135" r="12"/>
                        <circle cx="218" cy="395" r="5.5"/>
                        <circle cx="320" cy="490" r="9.5"/>
                </g>

                <g className={`${styles.solidCircles} ${styles.yellowFill}`}>
                    <circle cx="498" cy="239.7" r="6"/>
                    <circle cx="32" cy="278.2" r="10"/>
                    <circle cx="265.8" cy="34" r="10.5"/>
                    <circle cx="540" cy="366" r="22.5"/>
                    <circle cx="360" cy="345" r="3"/>
                </g>
        </g>

      </svg>
    </div>
  )
}
