process.stdout.write('This is my prompt > ')

process.stdin.on('data', (data)=>{
    let pwd = data.toString().trim()
    //console.log(pwd.length)
    if (pwd == 'pwd'){process.stdout.write(process.cwd())}
    else{process.stdout.write('not a pwd command')}
    process.stdout.write('\n This is my prompt > ')
})
