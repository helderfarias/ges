package criteria

type orOperador struct {
	expr Expression
}

func (a *orOperador) ToSQL(i Param) string {
	return "\t  OR (" + a.expr.ToSQL(i) + ")"
}

func (a *orOperador) Values() map[string]interface{} {
	return a.expr.Values()
}
