import classes from './profilePage.module.css'
import ava from '../../assets/images/ava.svg'
import { ProfileHeader } from '../../components/templates/profileHeader/profHeader'

export function ProfilePage(){
    function editProfile(){
        alert("You cant edit it now. sorry")
    }
    function dontWork(){
        alert("this also doesn't work.")
    }
    return(
        <div className={classes.profBody}>
            <ProfileHeader/>
            <div className={classes.conteiner}>
                <div className={classes.user}>
                    <div className={classes.userInfo}>
                        <img src={ava} alt="Mini Photo" />
                        <div className={classes.userName}>
                            <div className={classes.userNickname}>NickName</div>
                        </div>
                    </div>
                    <button className={classes.userEdit} onClick={editProfile}>edit profile</button>
                    
                </div>
                <div className={classes.personalData}>
                    <div className={classes.parsDataTask}>Personal data </div>
                    <div className={classes.personalInfo}>
                    <div className={classes.emailBlock}>
                        <div className={classes.leftEmail}>
                            <div className={classes.email}>
                                <img src='../src/assets/images/email.svg'/>
                                <div className={classes.emailInfo}>
                                    <div className={classes.task}>email</div>
                                    <div className={classes.sub}>em***@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.rightEmail}>
                            <button className={classes.change} onClick={dontWork}>change</button>
                        </div>
                    </div>
                    <div className={classes.passwordBlock}>
                        <div className={classes.leftPassword}>
                            <div className={classes.password}>
                            <img src='../src/assets/images/key.svg'/>
                            <div className={classes.passwordInfo}>
                                <div className={classes.task}>password</div>
                                <div className={classes.sub}>**********</div>
                            </div>
                            </div> 
                        </div>
                        <div className={classes.rightPassword}>
                            <button className={classes.change} onClick={dontWork}>change</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}