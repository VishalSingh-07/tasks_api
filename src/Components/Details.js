import React, { useState, useEffect } from "react"
import "./Details.css"
const API_URL = "https://jsonplaceholder.typicode.com/users"

function Details() {
	const [users, setUsers] = useState([])
	const [isExpanded, setIsExpanded] = useState(false)
	async function fetchUsers() {
		const response = await fetch(API_URL)
		const data = await response.json()
		setUsers(data)
	}

	useEffect(() => {
		fetchUsers()
	}, [])

	const handleClick = (id) => {
		setIsExpanded({ ...isExpanded, [id]: !isExpanded[id] })
	}

	return (
		<div className="container">
			{users.map((user) => (
				<div className="main__container">
					<div className="header_container">
						<div className="header_container-company">
							<h3>{user.company.name}</h3>
						</div>
						<div className="header_container-contact">
							<h3>Contact</h3>
							<p>{user.name}</p>
						</div>
						<div className="header_container-city">
							<h3>City</h3>
							<p>{user.address.city}</p>
						</div>
						<div className="header_container-phone">
							<h3>Phone Number</h3>
							<p>{user.phone}</p>
						</div>
						<div className="main_container_button">
							<button className="btn" onClick={() => handleClick(user.id)}>
								{isExpanded[user.id] ? "Hide Details" : "View Details"}
							</button>
						</div>
					</div>
					<div className="expanded_container">
						{isExpanded[user.id] ? (
							<div className="expanded_container-main">
								<div className="expanded_container-top">
									<h4>
										Company Name: <a href={user.website}>{user.company.name}</a>
									</h4>
									<div className="description">
										<h4>Description: </h4>
										<span>{user.company.catchPhrase} and </span>
										<span>{user.company.bs}</span>
									</div>
								</div>
								<div className="expanded_container_bottom">
									<div className="expanded_container_bottom-left">
										<div>
											<h4>Contact Person</h4>
											<p>{user.name}</p>
										</div>
										<div>
											<h4>Username</h4>
											<p>{user.username}</p>
										</div>
										<div>
											<h4>Email</h4>
											<p>{user.email}</p>
										</div>
										<div>
											<h4>Phone Number</h4>
											<p>{user.phone}</p>
										</div>
									</div>
									<div className="expanded_container_bottom-right">
										<div>
											<h4>Address</h4>
											<p>
												<span>{user.address.street}, </span>
												<span>{user.address.suite}, </span>
												<span>{user.address.city}, </span>
												<span>{user.address.zipcode}</span>
											</p>
										</div>
										<div>
											<h4>City</h4>
											<p>{user.address.city}</p>
										</div>
									</div>
								</div>
							</div>
						) : null}
					</div>
				</div>
			))}
		</div>
	)
}

export default Details
