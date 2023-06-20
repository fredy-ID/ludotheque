from .source import Source

def test_should_reverse_string():
    source = Source()
    assert source.reverse_str('abc') == 'bac'
 
#TODO : Exemple de mock (python pur)
def test_main_function(monkeypatch):
    source = Source()
    def mockreturn():
        return 100
 
    monkeypatch.setattr(source, 'request', mockreturn)
 
    expected_value = 100
    assert source.main_function() == expected_value

