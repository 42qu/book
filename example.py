@route('%s/'%ini.urlprefix)
def index():
    __urlog("INFO","idx++")
    return template('index.tpl',urlprefix=ini.urlprefix)

