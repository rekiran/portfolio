import React from "react";
import styles from "./CodeRain.module.css";

const CodeRain: React.FC = () => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 246.8 212.5"
      >
        <style>{`
    .st10,.st5,.st6,.st7,.st8,.st9{fill:none;stroke:#c586c0;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10}.st10,.st6,.st7,.st8,.st9{stroke:#9cdcfe}.st10,.st7,.st8,.st9{stroke:#ce9178}.st10,.st8,.st9{stroke:#569cd6}.st10,.st9{stroke:#fff}.st10{stroke:#dcdcaa}
  `}</style>
        <image
          width="251"
          height="222"
          xlinkHref="data:image/png;base64,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 hw8AXLV/BRgAxsRASnErvGgAAAAASUVORK5CYII="
          transform="translate(-2.3 -8)"
          overflow="visible"
          opacity=".7"
        />
        <path
          d="M224.4 193H22.1a9.3 9.3 0 0 1-9.3-9.3V10.4c0-5.2 4.2-9.3 9.3-9.3h202.3c5.2 0 9.3 4.2 9.3 9.3v173.3a9.2 9.2 0 0 1-9.3 9.3z"
          fill="#252526"
        />
        <path
          d="M233.8 16h-221V9.9c0-5.2 4.2-9.3 9.3-9.3h202.3c5.2 0 9.3 4.2 9.3 9.3V16z"
          fill="#444"
        />
        <ellipse cx="202.9" cy="8.5" rx="3.2" ry="3" fill="#00eb21" />
        <ellipse cx="212.2" cy="8.5" rx="3.2" ry="3" fill="#ff0" />
        <ellipse cx="221.5" cy="8.5" rx="3.2" ry="3" fill="red" />
        <g className={styles.code}>
          <g className={styles.import_1}>
            <path className={styles.import_1_0} d="M26.3 28.4h35" />
            <path className={styles.import_1_1} d="M68.7 28.4h49.8" />
            <path className={styles.import_1_2} d="M125.9 28.4h22.2" />
            <path className={styles.import_1_3} d="M155.5 28.4H200" />
          </g>
          <g className={styles.import_2}>
            <path className={styles.import_2_0} d="M26.3 37.9h35" />
            <path className={styles.import_2_1} d="M68.7 37.9H111" />
            <path className={styles.import_2_2} d="M118.5 37.9h22.2" />
            <path className={styles.import_2_3} d="M148.1 37.9h41.3" />
          </g>
          <g className={styles.declaration_1}>
            <path className={styles.declaration_1_0} d="M25.3 57H56" />
            <path className={styles.declaration_1_1} d="M64.4 57h49.8" />
            <path className={styles.declaration_1_2} d="M121.6 57h2.2" />
          </g>
          <g className={styles.declaration_2}>
            <path className={styles.declaration_2_0} d="M43.3 66.5h37" />
            <path className={styles.declaration_2_1} d="M84.6 66.5h72" />
            <path className={styles.declaration_2_2} d="M160.8 66.5h2.1" />
          </g>
          <g className={styles.properties}>
            <path className={styles.properties_1_0} d="M60.2 76.1h37.1" />
            <path className={styles.properties_1_1} d="M104.7 76.1l84.6.4" />
            <path className={styles.properties_2_0} d="M60.2 85.6l50.1-.1" />
            <path className={styles.properties_2_1} d="M116.7 85.6h37.1" />
            <path className={styles.properties_3_0} d="M60.2 95.1h37.1" />
            <path className={styles.properties_3_1} d="M103.7 95.1h37.1" />
            <path className={styles.properties_4_0} d="M60.2 104.6l51.1-.1" />
            <path className={styles.properties_4_1} d="M117.7 104.6l19.6-.1" />
            <path className={styles.properties_5_0} d="M61.2 113.6l58.1-.1" />
            <path className={styles.properties_5_1} d="M126.2 113.6l48.1-.1" />
            <path className={styles.properties_6_0} d="M60.2 123.7l62.1-.2" />
            <path className={styles.properties_6_1} d="M129.2 123.7l55.1-.2" />
          </g>
          <g className={styles.declaration_3}>
            <path className={styles.declaration_3_0} d="M43.3 132.2h2.1" />
          </g>
          <g className={styles.declaration_4}>
            <path className={styles.declaration_4_0} d="M25.3 151.3H56" />
            <path className={styles.declaration_4_1} d="M64.4 151.3h38.2" />
            <path className={styles.declaration_4_2} d="M110 151.3h2.1" />
            <path className={styles.declaration_4_3} d="M119.5 151.3h49.8" />
            <path className={styles.declaration_4_4} d="M173.5 151.3h43.4" />
          </g>
          <g className={styles.declaration_5}>
            <path className={styles.declaration_5_0} d="M25.3 160.8h38.1" />
            <path className={styles.declaration_5_1} d="M67.7 160.8h36" />
            <path className={styles.declaration_5_2} d="M107.9 160.8h2.1" />
            <path className={styles.declaration_5_3} d="M117.5 160.8h72" />
            <path className={styles.declaration_5_4} d="M195.9 160.8h14.8" />
            <path className={styles.declaration_5_5} d="M219.1 160.8h2.1" />
          </g>
          <g className={styles.export}>
            <path className={styles.export_0} d="M25.3 179.9h24.4" />
            <path className={styles.export_1} d="M56.1 179.9h30.7" />
            <path className={styles.export_2} d="M95.2 179.9h6.4" />
            <path className={styles.export_3} d="M110 179.9h2.1" />
            <path className={styles.export_4} d="M120.5 179.9h38.1" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default CodeRain;
