let s:plugin_directory = resolve(expand('<sfile>:p:h').'/../lib')

python << EOF
import emmet,vim
emmet.addSymbolsFromFile('android_xml',vim.eval('s:plugin_directory')+'/completions/android.json')
emmet.handleType('android_xml',['android_xml'])
EOF
