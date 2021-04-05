import { Form } from 'react-bootstrap';

import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'

dayjs.extend(dayOfYear)

export default function DateInput() {
    return (
        <Form.Group controlId="formBasicDate">
            <Form.Label>Register Date</Form.Label>
            <Form.Control type="date" defaultValue={dayjs(Date.now()).format('YYYY-MM-DD')} />
        </Form.Group>
    )
}