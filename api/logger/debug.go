// +build debug

package logger

import "log"

func Debug(fmt string, args ...interface{}) {
	log.Printf("[gesapi-debug] "+fmt, args...)
}

func Info(fmt string, args ...interface{}) {
	log.Printf("[gesapi-info] "+fmt, args...)
}

func Error(fmt string, args ...interface{}) {
	log.Printf("[gesapi-error] "+fmt, args...)
}
