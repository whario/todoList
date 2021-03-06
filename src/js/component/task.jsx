import React from "react";
import PropTypes from "prop-types";

function Task(props) {
	return (
		<div>
			<p>
				{props.task}
				<button
					type="button"
					className="btn btn-outline-danger btn-sm"
					onClick={e => props.deleteTask(props.id)}>
					X
				</button>
			</p>
		</div>
	);
}
Task.propTypes = {
	task: PropTypes.string,
	id: PropTypes.number,
	deleteTask: PropTypes.func
};
export default Task;
