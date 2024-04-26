import React from "react";

interface Props {
    total: number;
    progress: number;
    width?: string;
}
export const ProgressBar : React.FC<Props> = ( {total, progress, width }) => {
    const progressPercentage = (progress / total) * 100;

    return (
        <div className={"borderAll"} style={{width: width }}>
            <div style={{ position: 'relative', height: '20px', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'  }} />
                <div style={{ position: 'absolute', top: '0', left: '0', width: `${progressPercentage}%`, height: '100%', backgroundColor: 'lightgray' }} />
                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ zIndex: '1' }}> {progress} / {total}</span>
                </div>
            </div>
        </div>
    );
}