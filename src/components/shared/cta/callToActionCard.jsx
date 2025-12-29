import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cta.css';

// CallToActionCard props:

// ============== ICON PROPS ==================== //
// iconColor: color for the icon
// iconBg: background color for the icon container
// icon: FontAwesome icon
// iconSrc: custom image icon source

// ============== BASE PROPS ==================== //
// background: array of two colors for gradient background
// borderColor: color for border
// title: title text
// description: description text
// linkName: text for the link button
// link: URL for the link button - can be internal or external

//==================== IMPORTANT ====================//
// Use icon to use a FontAwesome icon
// Use iconSrc to use a custom image icon

function CallToActionCard({background=[], borderColor, iconColor, iconBg, icon, iconSrc, title, description, linkName, link}) {
    const iconStyles = {
        backgroundColor: iconBg,
        color: iconColor
    }
    
    const cardStyle = {
        background: background.length === 2 ? `linear-gradient(135deg, ${background[0]} 0%, ${background[1]} 70.71%)` : 'none',
        border: borderColor ? `2px solid ${borderColor}` : 'none',
    };

    return (
        <div className="flex justify-center items-top p-10 cta-card" style={cardStyle}>
            <div className="flex align-center justify-center mr-6 cta-icon" style={iconStyles}>  
                {icon ? (
                    <FontAwesomeIcon icon={icon} className="margin-auto" style={{fontSize: '27px'}} />
                ) : iconSrc ? (
                    <img src={iconSrc} alt={title + ' icon'} className="margin-auto" width='70' height='70' />
                ) : null}
            </div>   
            <div>
                <h4 className="mb-4">{title}</h4>
                <p className="mb-6">{description}</p>
                <Link to={link} className="cta-card-button">{linkName}</Link>
            </div>
        </div>
    )
}

export default CallToActionCard;