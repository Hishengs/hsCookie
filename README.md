# hsCookie
*A simple Cookie tool*

----------
#### **Cookie.get**
*获取cookie*

**args**
-- name
**return**
-- cookie


----------
#### **Cookie.all**
*获取所有cookie*

**args**
-- none
**return**
-- cookies object

----------
#### **Cookie.set**
*设置cookie*

**args**
-- name
-- value
-- options(对象，可选)
-- -- path : cookie路径
-- -- domain : cookie域名
-- -- expires : cookie过期时间(s秒)
-- -- secure
**return**
-- cookies object

----------
#### **Cookie.del**
*删除cookie*

**args**
-- name
-- options(对象，可选，同上)
