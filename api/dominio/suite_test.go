package dominio

import "github.com/stretchr/testify/suite"
import "testing"

type DominioSuite struct {
	suite.Suite
}

func (s *DominioSuite) SetupTest() {
}

func TestDominioAllTests(t *testing.T) {
	suite.Run(t, new(DominioSuite))
}
