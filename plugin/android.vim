if !exists('g:emmet_completions_py_cmd')
    if has('python3')
        let g:emmet_completions_py_cmd = "py3"
    elseif has('python')
        let g:emmet_completions_py_cmd = "py"
    else
        finish
    endif
endif

let s:plugin_directory = resolve(expand('<sfile>:p:h').'/../lib')

exec g:emmet_completions_py_cmd join([
            \ "import emmet,vim",
            \ "emmet.addSymbolsFromFile('android_xml',vim.eval('s:plugin_directory')+'/completions/android.json')",
            \ "emmet.handleType('android_xml',['android_xml'])"
\ ], "\n")
