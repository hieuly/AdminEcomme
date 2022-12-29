import "./newUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>Username</label>
                <input type="text" placeholder="thorne" />
            </div>
            <div className="newUserItem">
                <label>FullName</label>
                <input type="text" placeholder="Thomas Thorne" />
            </div>
            <div className="newUserItem">
                <label>Email</label>
                <input type="text" placeholder="thorne@gmail.com" />
            </div>
            <div className="newUserItem">
                <label>Password</label>
                <input type="text" placeholder="password" />
            </div>
            <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="0987654321" />
            </div>
            <div className="newUserItem">
                <label>Address</label>
                <input type="text" placeholder="HN | VN" />
            </div>
            <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                </div>
            </div>
            <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>            
        </form>
        <button className="newUserButton">Create</button>
    </div>
  )
}
