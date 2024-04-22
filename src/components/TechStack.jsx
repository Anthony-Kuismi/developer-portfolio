import StackIcon from "tech-stack-icons";
import "./TechStack.css"
export function TechStack({ javascript, css, html, react, dart, flutter, firebase, heroku, vite, column }) {
    if (column === true) {
        return (
            <div className="tech-stack-container-column">
                {(javascript === true) && <StackIcon name="js" />}
                {(css === true) && <StackIcon name="css3" />}
                {(html === true) && <StackIcon name="html5" />}
                {(react === true) && <StackIcon name="reactjs" />}
                {(dart === true) && <StackIcon name="dart" />}
                {(flutter === true) && <StackIcon name="flutter" />}
                {(firebase === true) && <StackIcon name="firebase" />}
                {(heroku === true) && <StackIcon name="heroku" />}
                {(vite === true) && <StackIcon name="vitejs" />}
            </div>
        );

    } else {
        return (
            <div className="tech-stack-container">
                {(javascript === true) && <StackIcon name="js" />}
                {(css === true) && <StackIcon name="css3" />}
                {(html === true) && <StackIcon name="html5" />}
                {(react === true) && <StackIcon name="reactjs" />}
                {(dart === true) && <StackIcon name="dart" />}
                {(flutter === true) && <StackIcon name="flutter" />}
                {(firebase === true) && <StackIcon name="firebase" />}
                {(heroku === true) && <StackIcon name="heroku" />}
                {(vite === true) && <StackIcon name="vitejs" />}
            </div>
        );
    }
}