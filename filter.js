import {Transform} from 'node:stream'

export class Filter extends Transform {
    constructor (metricName, options = {}) {
        options.objectMode = true
        super(options)
        this.metricName = metricName
        this.values = []
    }
    _transform(chunk, encoding, cb) {
        if(chunk[this.metricName]) this.values.push(chunk[this.metricName])
        cb()
    }
    _flush(done) {
        done(null, {[this.metricName]: this.values})
    }
}