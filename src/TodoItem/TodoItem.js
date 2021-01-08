import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

export default class TodoItem extends Component {

    render() {
      const { todo } = this.props
      return (
          <div>
              <div className={"bg-gray-100 rounded-xl p-2 mb-2 " + (todo.completed ? 'bg-green-100' : 'bg-gray-100')}>
                  <div className="flex">
                    <div className="flex-auto pl-2">
                      <div className={'leading-tight text-gray-500 ' + (todo.completed ? 'line-through' : '')}>{todo.text}</div>
                    </div>
                    <div className="flex-none pr-2">
                      <FontAwesomeIcon onClick={this.props.deleteTodo} className="text-red-500 hover:text-red-600 float-right" icon={faMinusCircle} />
                    </div>
                    <div className="flex-none">
                      <FontAwesomeIcon onClick={this.props.markComplete} className="text-green-500 hover:text-green-600 float-right" icon={faCheckCircle} />
                    </div>

                  </div>

              </div>
          </div>
      )
    }
}
