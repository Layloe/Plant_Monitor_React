import React from "react";

const PlantList = ({plants, message}) => {
    return (
        <div className="image-section">
            {plants !== null ? (
                plants.length > 0 ? (
                    plants.map((plant, index) => (
                        <div className="plant" key={index}>
                            <h3>{plant.common_name} ({plant.scientific.name.join(', ')})</h3>
                            {plant.default_image ? (
                              <img src={plant.default_image.small_url} alt={plant.common_name} />   
                            ) : (
                                <img src="\src\assets\images\placeholder_plant.jpg" alt="Default Image" /> 
                            )}
                            <p>Lifecycle: {plant.cycle}</p>
                            <p>Watering: {plant.watering}</p>
                            <p>Sunlight: {plant.sunlight.join(', ')}</p>
                        </div>
                    ))
                ) : (
                    <p>{message}</p>
                )
            ) : (
                <img src="src\assets\images\splash_plant1.jpg" alt="Greener Thumb Home" />
            )}
        </div>
    );
};

export default PlantList