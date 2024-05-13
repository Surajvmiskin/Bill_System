def reverseWords(s):
    new_string = ""
    for i in range(len(s)):
        if s[i] == " ":
            i += 1
        else:
            for elem in s:
                new_string = elem + new_string
    return new_string


print(reverseWords("My Name is Suraj"))
